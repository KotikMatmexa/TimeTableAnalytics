package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EducatorsWithEventsDto {

    @JsonProperty("educator")
    private EducatorsDto educatorsDto;

    @JsonProperty("events")
    private List<EventsDto> eventsDtoList;
}
