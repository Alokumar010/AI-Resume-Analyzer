package com.example.resumeanalyzer.dto;

import lombok.Data;

import java.util.List;

@Data
public class ResumeAnalysisResponse {

    private int atsScore;

    private int skillsScore;

    private int projectsScore;

    private int formattingScore;

    private List<String> strengths;

    private List<String> improvements;

    private List<String> missingKeywords;

    private String summary;
}