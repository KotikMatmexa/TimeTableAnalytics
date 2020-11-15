package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EventLocationDto {

    private String oid;

    private String eventSubject;

    @JsonProperty("start")
    private String eventStart;

    @JsonProperty("end")
    private String eventEndDate;

    @JsonProperty("educators_Display_Text")
    private String eventEducatorsDisplayText;

    @JsonProperty("internal_description")
    private String eventInternalDescription;

    @JsonProperty("subject_english")
    private String eventSubjectEnglish;

    @JsonProperty("educators_display_text_english")
    private String eventEducatorsDisplayTextEnglish;

    @JsonProperty("educators_short_display_text")
    private String eventEducatorsShortDisplayText;

    @JsonProperty("educators_short_display_text_english")
    private String eventEducatorsShortDisplayTextEnglish;

    @JsonProperty("description_short")
    private String eventDescriptionShort;

    @JsonProperty("description_long")
    private String eventDescriptionLong;
}
