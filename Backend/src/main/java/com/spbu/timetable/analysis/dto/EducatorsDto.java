package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;

@Getter
@Setter
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor
@NoArgsConstructor
public class EducatorsDto {

    private String oid;

    @JsonProperty("name")
    private String displayName;

    @JsonProperty("short_name")
    private String shortDisplayName;

    @JsonProperty("name_english")
    private String displayNameEnglish;

    @JsonProperty("short_name_english")
    private String shortDisplayNameEnglish;

    @JsonProperty("position_name")
    private String positionShortName;

    @JsonProperty("position_name_english")
    private String positionNameEnglish;

}
