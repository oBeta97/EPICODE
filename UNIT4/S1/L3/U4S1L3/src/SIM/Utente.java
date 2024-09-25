package SIM;

public class Utente {
    
    private String nome;
    private String cognome;


    // Costruttore
    public Utente(String nome, String cognome) {
        setNome(nome);
        setCognome(cognome);
    }

    public String stampa() {
        return "nome: " + nome + " cognome: " + cognome;
    }

    // Getter e setter
    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return this.cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }
    
}
