package ECommerce;

import java.time.LocalDate;

public class Cliente {
    private int id;
    private String fullname;
    private String email;
    private LocalDate dataIscrizione;

    // Constructors
    public Cliente(String fullname, String email) {
        this.setId(hashCode());
        this.setFullname(fullname);
        this.setEmail(email);
        this.setDataIscrizione(LocalDate.now());
    }

    // Getters and Setters
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullname() {
        return this.fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDataIscrizione() {
        return this.dataIscrizione;
    }

    public void setDataIscrizione(LocalDate dataIscrizione) {
        this.dataIscrizione = dataIscrizione;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "id=" + id +
                ", fullname='" + fullname + '\'' +
                ", email='" + email + '\'' +
                ", dataIscrizione=" + dataIscrizione +
                '}';
    }
    
}
