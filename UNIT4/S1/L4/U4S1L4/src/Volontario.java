public class Volontario extends Dipendente {

    private String tipoDipendente;
    private short eta;

    public Volontario(String _fullName, Dipartimenti _dipartimento, short _eta){
        super(_fullName, _dipartimento);
        this.tipoDipendente = "Volontario";
        this.eta = _eta;
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
