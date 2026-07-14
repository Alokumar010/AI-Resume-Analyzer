package com.example.resumeanalyzer.parser;


import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class Parser {
    public String extractText(MultipartFile file) {

        try(PDDocument document = Loader.loadPDF(file.getBytes())){

            PDFTextStripper stripper = new PDFTextStripper();

            return stripper.getText(document);
        }catch (Exception e){
            throw new RuntimeException(e);
        }

    }


}
