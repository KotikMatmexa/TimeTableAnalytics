package com.spbu.timetable.analysis.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class DivisionsUnitsKey implements Serializable {

    @Column(name = "contingentunitcombinations")
    String contingentUnit;

    @Column(name = "divisions")
    String division;

}
