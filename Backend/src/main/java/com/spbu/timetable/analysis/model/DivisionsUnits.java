package com.spbu.timetable.analysis.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "divisiondivisions_contingentunitcontingentunitcombinations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class DivisionsUnits {
    @EmbeddedId
    private DivisionsUnitsKey id;

    @ManyToOne
    @MapsId("contingentUnit")
    @JoinColumn(name = "contingentunitcombinations")
    private ContingentUnit contingentUnit;

    @ManyToOne
    @MapsId("division")
    @JoinColumn(name = "divisions")
    private Division division;
}
