package com.estech.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estech.backend.model.Usuario;
import com.estech.backend.service.UsuarioService;

@RestController
@CrossOrigin({"*"})
@RequestMapping("api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping()
    public List<Usuario> listarClientes(){
        return usuarioService.listarClientes();
    }

    @PostMapping()
    public void save(@RequestBody Usuario usuario){
         usuarioService.guardarCliente(usuario);
    }

    
    
}
