package com.example.resumeanalyzer.controller;


import com.example.resumeanalyzer.dto.JobMatchResponse;
import com.example.resumeanalyzer.dto.ResumeAnalysisResponse;
import com.example.resumeanalyzer.service.OllamaService;
import com.example.resumeanalyzer.service.ResumeAnalysisService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/resume")
public class ResumeController {

    private final ResumeAnalysisService resumeAnalysisService;
    private final OllamaService ollamaService;


//    Get file from the frontend using http request POST
    @PostMapping("/analyze")
    public ResumeAnalysisResponse uploadResume(@RequestParam("resume")MultipartFile resume) throws Exception{
        return resumeAnalysisService.analyze(resume);
    }

    @PostMapping("/match")
    public JobMatchResponse uploadJob(@RequestParam("resume")MultipartFile resume,String jd) throws Exception{
        return resumeAnalysisService.analyzeJobMatch(resume,jd);
    }

    @PostMapping("/match-file")
    public JobMatchResponse uploadJob(@RequestParam("resume")MultipartFile resume, @RequestParam("jd")MultipartFile jd) throws Exception{
        return resumeAnalysisService.analyzeJobMatch(resume,jd);
    }

    @GetMapping("/ai-test")
    public ResponseEntity<String> aiTest(){
        String response = ollamaService.ask("Explain java in one sentence");

        return ResponseEntity.ok(response);
    }
}


