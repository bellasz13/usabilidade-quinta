package ativ1;

public class Pessoa {
    private String nome;
    private String sobrenome;

    public Pessoa() {
        this.nome = "";
        this.sobrenome = "";
    }

    public Pessoa(String nome, String sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getNomeCompleto() {
        return nome + " " + sobrenome;
    }
}

class Funcionario extends Pessoa {
    private int matricula;
    private double salario;

    public Funcionario() {
        this.matricula = 0;
        this.salario = 0.0;
    }

    public Funcionario(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome);
        this.matricula = matricula;
        setSalario(salario);
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        if (salario >= 0) {
            this.salario = salario;
        } else {
            System.out.println("Salário não pode ser negativo.");
        }
    }

    public double getSalarioPrimeiraParcela() {
        return salario * 0.6;
    }

    public double getSalarioSegundaParcela() {
        return salario * 0.4;
    }
}

class Professor extends Funcionario {

    public Professor() {
        super();
    }

    public Professor(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome, matricula, salario);
    }

    @Override
    public double getSalarioPrimeiraParcela() {
        return getSalario();
    }

    @Override
    public double getSalarioSegundaParcela() {
        return 0.0;
    }
}