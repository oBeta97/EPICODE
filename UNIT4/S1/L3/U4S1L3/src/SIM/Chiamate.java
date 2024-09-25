package SIM;

public class Chiamate {
    
    private Utente mittente;
    private Utente destinatario;
    private int durata;


    // Costruttore
    public Chiamate(Utente mittente, Utente destinatario, int durata) {
        setMittente(mittente);
        setDestinatario(destinatario);
        setDurata(durata);
    }

    public String stampa() {
        return "mittente: " + mittente.stampa()
                + "\ndestinatario: " + destinatario.stampa()
                + "\ndurata: " + durata;
    }

    // Getter e setter
    public Utente getMittente() {
        return this.mittente;
    }

    public void setMittente(Utente mittente) {
        this.mittente = mittente;
    }

    public Utente getDestinatario() {
        return this.destinatario;
    }

    public void setDestinatario(Utente destinatario) {
        this.destinatario = destinatario;
    }

    public int getDurata() {
        return this.durata;
    }

    public void setDurata(int durata) {
        this.durata = durata;
    }
    
}
