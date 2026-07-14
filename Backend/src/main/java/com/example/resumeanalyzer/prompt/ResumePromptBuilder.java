package com.example.resumeanalyzer.prompt;

import org.springframework.stereotype.Component;

@Component
public class ResumePromptBuilder {

    public String buildPrompt(String resumeText) {
        return """
        You are an expert ATS (Applicant Tracking System) Resume Analyzer.
        
        Task: Perform a comprehensive, objective analysis of the provided resume text against modern industry tech standards.
        
        Output Format: You must return raw JSON that strictly adheres to the schema below. 
        CRITICAL: Do not include markdown formatting, markdown code blocks (e.g. do not wrap in ```json), or any conversational introductory/concluding text. Output ONLY the JSON object string.

        JSON Schema:
        {
          "atsScore": <integer between 0 and 100>,
          "skillsScore": <integer between 0 and 100>,
          "projectsScore": <integer between 0 and 100>,
          "formattingScore": <integer between 0 and 100>,
          "strengths": ["string", "string", ... max 5 items],
          "improvements": ["string", "string", ... max 5 items],
          "missingKeywords": ["string", "string", ... max 10 items],
          "summary": "string, max 100 words summarizing overall evaluation"
        }

        Resume Data:
        %s
        """.formatted(resumeText);
    }

    public String buildJobMatchPrompt(String resumeText, String jobDescription) {
        return """
        You are an expert recruitment system.
        
        Task: Evaluate how well the provided resume matches the targeted Job Description requirements.
        
        Output Format: You must return raw JSON that strictly adheres to the schema below. 
        CRITICAL: Do not include markdown formatting, markdown code blocks (e.g. do not wrap in ```json), or any conversational text. Output ONLY the JSON object string.

        JSON Schema:
        {
          "atsScore": <integer between 0 and 100 representing job alignment match percentage>,
          "skillsScore": <integer between 0 and 100 specifically matching requested stack>,
          "projectsScore": <integer between 0 and 100 evaluation of relevant experience>,
          "formattingScore": <integer between 0 and 100>,
          "strengths": ["string highlighting specific job alignment keys", ... max 5 items],
          "improvements": ["string detailing specific things to add to match this role description", ... max 5 items],
          "missingKeywords": ["specific tools or technologies missing but requested in the job description", ... max 10 items],
          "summary": "string explaining how well the candidate qualifies for this exact job, max 100 words"
        }

        Resume Data:
        %s

        Target Job Description:
        %s
        """.formatted(resumeText, jobDescription);
    }
}