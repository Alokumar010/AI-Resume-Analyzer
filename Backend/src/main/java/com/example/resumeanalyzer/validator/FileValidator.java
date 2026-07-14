package com.example.resumeanalyzer.validator;

import com.example.resumeanalyzer.exception.InvalidFileException;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileValidator {

    public void validate(MultipartFile file){

        if(file.isEmpty()){
            throw new InvalidFileException(
                    "Uploaded file is empty."
            );
        }

        if(!"application/pdf".equals(file.getContentType())){
            throw new InvalidFileException(
                    "Only PDF files are allowed."
            );
        }

        if(file.getSize() > 10 * 1024 * 1024){
            throw new InvalidFileException(
                    "Maximum allowed size is 5 MB."
            );
        }

    }

}