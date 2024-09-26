public class DipendentePartTime extends Dipendente {

        private String tipoDipendente;

        public DipendentePartTime(String _fullName, Dipartimenti _dipartimento){
            super(_fullName, _dipartimento);
            this.tipoDipendente = "Part Time";
        }

        @Override
        void calculateSalary(float _pagaOraria) {
            setPagaOraria(_pagaOraria);
            setStipendio((short) 80);
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

