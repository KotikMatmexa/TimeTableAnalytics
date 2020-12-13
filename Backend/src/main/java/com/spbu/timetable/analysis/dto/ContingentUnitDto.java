package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ContingentUnitDto {

    private String oid;

    private String course;

    private String name;

    private String studentGroup;
}
