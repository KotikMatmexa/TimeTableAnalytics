package com.spbu.timetable.analysis.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.spbu.timetable.analysis.model.Floor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LocationDtoForAddress {

    private String oid;

    @JsonProperty("additional_info")
    private String AdditionalInfo;

    @JsonProperty("number_actual")
    private String numberActual;

    @JsonProperty("multimedia_equipment")
    private Integer multimediaEquipment;

    @JsonProperty("labware_equipment")
    private Integer labwareEquipment;

    private Integer capacity;

    private String name;

    @JsonProperty("display_name_russian")
    private String displayName1;

    @JsonProperty("display_name_english")
    private String displayNameEnglish1;

    @JsonProperty("display_name_russian_2")
    private String displayName2;

    @JsonProperty("display_name_english_2")
    private String displayNameEnglish2;

    @JsonProperty("computers_count")
    private Integer computersCount;

    @JsonProperty("floor")
    private String locationFloorName;
}
