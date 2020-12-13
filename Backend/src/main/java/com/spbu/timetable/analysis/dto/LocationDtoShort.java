package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LocationDtoShort {

    protected String oid;

    @JsonProperty("additional_info")
    protected String AdditionalInfo;

    @JsonProperty("number_actual")
    protected String numberActual;

    @JsonProperty("multimedia_equipment")
    protected Integer multimediaEquipment;

    @JsonProperty("labware_equipment")
    protected Integer labwareEquipment;

    protected Integer capacity;

    protected String name;

    @JsonProperty("display_name_russian")
    protected String displayName1;

    @JsonProperty("display_name_english")
    protected String displayNameEnglish1;

    @JsonProperty("display_name_russian_2")
    protected String displayName2;

    @JsonProperty("display_name_english_2")
    protected String displayNameEnglish2;

    @JsonProperty("computers_count")
    protected Integer computersCount;

    @JsonProperty("floor")
    protected String locationFloorName;
}
