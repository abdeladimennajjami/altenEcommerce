package com.alten.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Product")
@Getter
@Setter
@NoArgsConstructor
public class ProductEntity implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String code;
    private String name ;
    private String description ;
    private String image ;
    private String category ;
    private double price ;
    private Long quantity ;
    private String internalReference ;
    private Long shellId  ;
    private String inventoryStatus;
    private double rating ;
    private Date createdAt;
    private Date updatedAt;


}
