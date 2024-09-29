package com.alten.ecommerce.rest;

import com.alten.ecommerce.entity.ProductEntity;
import com.alten.ecommerce.model.ProductResponse;
import com.alten.ecommerce.repository.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")//ResourceConstants.PRODUIT_SELECT_V1
@CrossOrigin(origins = "http://localhost:4200")
public class ProductResource {

    @Autowired
    ProductRepository productRepository ;
    @Autowired(required=true)
    private ModelMapper modelMapper;



    @GetMapping(path="/{id}",  produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<ProductResponse> getProductById(@PathVariable  String id ){
        return productRepository.findById(Long.valueOf(id))
                .map(post -> modelMapper.map(post, ProductResponse.class)) ;
    }


    @GetMapping(path = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProductResponse> getProducts( ){
        return productRepository.findAll().stream().map(post -> modelMapper.map(post, ProductResponse.class))
                .collect(Collectors.toList());
    }

    @PostMapping(path = "" ,
            produces = MediaType.APPLICATION_JSON_VALUE ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductResponse> CreateProduit( @RequestBody ProductEntity produitEntity  ){
        productRepository.save(produitEntity);
        return new ResponseEntity<ProductResponse>(new ProductResponse() , HttpStatus.CREATED);
    }

    @PatchMapping(path = "/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE ,consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductResponse> updateProduit(  @PathVariable  String id, @RequestBody ProductEntity produitEntity  ){
        productRepository.save(produitEntity);
        return new ResponseEntity<ProductResponse>(new ProductResponse() , HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}"  )
    public ResponseEntity<ProductResponse> deleteProduit(  @PathVariable  String id  ){
        productRepository.deleteById(Long.valueOf(id));
        System.out.println("=deleteProduit>|"+id);
        return new ResponseEntity<ProductResponse>(new ProductResponse() , HttpStatus.OK);
    }








}
