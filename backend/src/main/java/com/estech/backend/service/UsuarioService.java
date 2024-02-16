package com.estech.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estech.backend.model.Usuario;
import com.estech.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    public UsuarioRepository usuarioRepository;

    public List<Usuario> listarUsuario(){
        return usuarioRepository.findAll();
    }
    
}
