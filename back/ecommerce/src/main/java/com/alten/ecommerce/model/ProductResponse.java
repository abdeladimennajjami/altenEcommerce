package com.alten.ecommerce.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ProductResponse implements Serializable {
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
    double rating ;
    private Date createdAt;
    private Date updatedAt;
}
