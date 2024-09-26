public class Dirigente extends Dipendente {

    private String tipoDipendente;

    public Dirigente(String _fullName, Dipartimenti _dipartimento){
        super(_fullName, _dipartimento);
        this.tipoDipendente = "Dirigente";
    }

    @Override
    void calculateSalary(float _pagaOraria) {
        setPagaOraria(_pagaOraria);
        setStipendio((short) 160);
    }

    @Override
    public String toString(){
        return super.toString() +
                "\t tipo dipendente: "+ getTipoDipendente() + "\n" +
                "}";
    }

    public String getTipoDipendente(){
        return this.tipoDipendente;
    }
}

