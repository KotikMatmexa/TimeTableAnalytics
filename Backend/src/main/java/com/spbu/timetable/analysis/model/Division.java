package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "division")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Division {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    private String name;

    @OneToMany(mappedBy = "contingentUnit")
    private List<DivisionsUnits> divisionsUnits;
}
