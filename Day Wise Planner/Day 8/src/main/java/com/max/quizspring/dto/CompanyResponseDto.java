package com.max.quizspring.dto;

import lombok.Data;

@Data
public class CompanyResponseDto {
    private Long id;

    private String name;

    private String contactEmail;

    private String contactPhone;
}
