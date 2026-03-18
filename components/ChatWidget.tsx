'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { tx, id } from '@instantdb/react';
import { db } from '@/lib/instant';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [sessionId, setSessionId] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Queries
    const { isLoading, error, data } = db.useQuery(
        sessionId ? { messages: { $: { where: { session: sessionId } } } } : {}
    );

    const messages = data?.messages || [];

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    // Create session on first open if not exists
    useEffect(() => {
        if (isOpen && !sessionId) {
            const newSessionId = id();
            setSessionId(newSessionId);
            db.transact(
                tx.chat_sessions[newSessionId].update({
                    status: 'active',
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                })
            );
            // Optional: Add welcome message from system
            // db.transact(
            //   tx.messages[id()].update({
            //     role: 'assistant', 
            //     content: '👋 ¡Hola! Soy el asistente virtual de Roesan. ¿En qué puedo ayudarte hoy?', 
            //     session: newSessionId,
            //     createdAt: Date.now() 
            //    })
            // );
        }
    }, [isOpen, sessionId]);

    const handleSend = () => {
        if (!input.trim() || !sessionId) return;

        const userMsgId = id();

        db.transact([
            tx.messages[userMsgId].update({
                role: 'user',
                content: input,
                session: sessionId,
                createdAt: Date.now(),
            }),
            tx.chat_sessions[sessionId].update({
                updatedAt: Date.now(),
            })
        ]);

        setInput('');

        // Here you would trigger the AI agent via webhook if not using InstantDB triggers
        // fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: input, sessionId }) });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4">
            {isOpen && (
                <Card className="w-80 md:w-96 shadow-xl border-primary/20 animate-in slide-in-from-bottom-10 fade-in duration-300">
                    <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg flex flex-row justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot size={20} />
                            </div>
                            <div>
                                <CardTitle className="text-sm font-bold">Asistente Roesan</CardTitle>
                                <p className="text-xs text-primary-foreground/80">En línea 24/7</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-1 text-white hover:bg-white/20"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={18} />
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0 flex flex-col h-[400px]">
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            {messages.length === 0 && (
                                <div className="text-center text-muted-foreground text-sm mt-10">
                                    <p>¡Hola! 👋</p>
                                    <p>Soy el asistente virtual de Roesan.</p>
                                    <p>Pregúntame sobre seguros, renovaciones o siniestros.</p>
                                </div>
                            )}
                            {messages.sort((a, b) => a.createdAt - b.createdAt).map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-br-none'
                                                : 'bg-muted text-muted-foreground rounded-bl-none'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                        <div className="p-3 border-t bg-background">
                            <div className="flex gap-2">
                                <Input
                                    value={input}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 focus-visible:ring-primary"
                                />
                                <Button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-white p-2">
                                    <Send size={18} />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-105"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </Button>
        </div>
    );
}
