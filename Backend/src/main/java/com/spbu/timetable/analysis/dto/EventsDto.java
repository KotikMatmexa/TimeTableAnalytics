package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventsDto {

    private String oid;

    private String eventSubject;

    @JsonProperty("start")
    private String eventStart;

    @JsonProperty("end")
    private String eventEndDate;

    @JsonProperty("educators_Display_Text")
    private String educatorsDisplayText;

    @JsonProperty("internal_description")
    private String internalDescription;

    @JsonProperty("subject_english")
    private String subjectEnglish;

    @JsonProperty("educators_display_text_english")
    private String educatorsDisplayTextEnglish;

    @JsonProperty("educators_short_display_text")
    private String educatorsShortDisplayText;

    @JsonProperty("educators_short_display_text_english")
    private String educatorsShortDisplayTextEnglish;

    @JsonProperty("description_short")
    private String descriptionShort;

    @JsonProperty("description_long")
    private String descriptionLong;

    @JsonProperty("faculty")
    private String contingentUnitFaculty;

    @JsonProperty("student_group")
    private String contingentUnitStudentGroup;

    @JsonProperty("locations_display_text")
    private String locationsDisplayText;
}
