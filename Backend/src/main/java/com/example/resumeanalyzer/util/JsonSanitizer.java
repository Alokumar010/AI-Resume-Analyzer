package com.example.resumeanalyzer.util;

import org.springframework.stereotype.Service;

@Service
public class JsonSanitizer {

    public String extractJson(String response) {
        if (response == null || response.trim().isEmpty()) {
            throw new RuntimeException("Empty response received from AI engine.");
        }

        int start = response.indexOf("{");
        int end = response.lastIndexOf("}");

        // Defensive check to handle cases where JSON boundaries are missing
        if (start == -1 || end == -1 || start >= end) {
            throw new RuntimeException("Failed to locate a valid JSON block in AI response. Raw output: " + response);
        }

        return response.substring(start, end + 1);
    }
}