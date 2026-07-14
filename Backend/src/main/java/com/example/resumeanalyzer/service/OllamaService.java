package com.example.resumeanalyzer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
//@RequiredArgsConstructor  can not use here
public class OllamaService {

    private final ChatClient chatClient;

    public OllamaService(ChatClient.Builder builder){
        this.chatClient = builder.build();
    }

    public String ask(String prompt){
        return chatClient.prompt().user(prompt).call().content();
    }
}
