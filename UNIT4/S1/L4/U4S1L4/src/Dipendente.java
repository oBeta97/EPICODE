import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

abstract class Dipendente implements Lavoratore {
    private int id;
    private String fullName;
    private float stipendio;
    private float pagaOraria;
    private Dipartimenti dipartimento;

    protected Dipendente (String _fullName, Dipartimenti _dipartimento){
        this.id = hashCode();
        setFullName(_fullName);
        this.stipendio = 1280.0f;
        this.pagaOraria = 8.0f;
        setDipartimento(_dipartimento);
    }

    abstract void calculateSalary(float _pagaOraria);

    public void checkIn(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedNow = now.format(formatter);


        System.out.println(getFullName() + " ha iniziato a lavorare alle " + formattedNow);
    }

    protected void setDipartimento(Dipartimenti dipartimento) {
        this.dipartimento = dipartimento;
    }

    protected int getId(){
        return this.id;
    }

    protected String getFullName(){
        return this.fullName;
    }

    protected float getStipendio(){
        return this.stipendio;
    }

    protected void setStipendio(short hours){
        this.stipendio = getPagaOraria() * hours;
    }

    protected float getPagaOraria() {
        return pagaOraria;
    }

    protected void setPagaOraria(float _pagaOraria){
        this.pagaOraria = _pagaOraria;
    }

    protected Dipartimenti getDipartimento(){
        return this.dipartimento;
    }

    private void setFullName(String _fullname) {
        this.fullName = _fullname;
    }

    @Override
    public String toString(){
        return "Dipendente{\n"+
                    "\t id: " + this.id + "\n" +
                    "\t nome: " + this.fullName + "\n" +
                    "\t stipendio: " + this.stipendio + "\n" +
                    "\t paga oraria: " + this.pagaOraria + "\n" +
                    "\t dipartimento: " + this.dipartimento + "\n";
    }
}
