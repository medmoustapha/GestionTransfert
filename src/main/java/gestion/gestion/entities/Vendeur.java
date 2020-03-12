package gestion.gestion.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Vendeur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomPrenom;
    private String tel;
    private String address;
    private String ville;

    @OneToMany(mappedBy = "vendeur1")
    @JsonIgnore
    private Collection<Operation> envoi;
    @OneToMany(mappedBy = "vendeur2")
    @JsonIgnore
    private Collection<Operation> recevoir;
    @OneToMany(mappedBy = "vendeur")
    @JsonIgnore
    private Collection<Versement> versements;
    @OneToMany(mappedBy = "vendeur")
    @JsonIgnore
    private Collection<Remboursement> remboursements;


    public Vendeur() {
    }

    public Vendeur(String nomPrenom, String tel, String address, String ville) {
        this.nomPrenom = nomPrenom;
        this.tel = tel;
        this.address = address;
        this.ville = ville;
    }

    public Long getId() {
        return id;
    }

    public String getNomPrenom() {
        return nomPrenom;
    }

    public void setNomPrenom(String nomPrenom) {
        this.nomPrenom = nomPrenom;
    }

    public String getTel() {
        return tel;
    }

    public String getAddress() {
        return address;
    }

    public String getVille() {
        return ville;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public Collection<Operation> getEnvoi() {
        return envoi;
    }

    public void setEnvoi(Collection<Operation> envoi) {
        this.envoi = envoi;
    }

    public Collection<Operation> getRecevoir() {
        return recevoir;
    }

    public void setRecevoir(Collection<Operation> recevoir) {
        this.recevoir = recevoir;
    }
}