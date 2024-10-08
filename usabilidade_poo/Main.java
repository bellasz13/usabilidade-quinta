package ativ1;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o seu nome: ");
        String nome = scanner.nextLine();

        System.out.print("Informe o seu sobrenome: ");
        String sobrenome = scanner.nextLine();

        System.out.print("Você é Funcionário ou Professor? ");
        String tipo = scanner.nextLine().trim().toLowerCase();

        if (tipo.equals("funcionario")) {
            System.out.print("Informe o número da matrícula: ");
            int matricula = scanner.nextInt();

            System.out.print("Informe o salário: ");
            double salario = scanner.nextDouble();

            Funcionario funcionario = new Funcionario(nome, sobrenome, matricula, salario);
            System.out.println("Salário do Funcionário (1ª parcela): " + funcionario.getSalarioPrimeiraParcela());
            System.out.println("Salário do Funcionário (2ª parcela): " + funcionario.getSalarioSegundaParcela());

        } else if (tipo.equals("professor")) {
            System.out.print("Informe o número da matrícula: ");
            int matricula = scanner.nextInt();

            System.out.print("Informe o salário: ");
            double salario = scanner.nextDouble();

            Professor professor = new Professor(nome, sobrenome, matricula, salario);
            System.out.println("Salário do Professor (1ª parcela): " + professor.getSalarioPrimeiraParcela());
            System.out.println("Salário do Professor (2ª parcela): " + professor.getSalarioSegundaParcela());

        } else {
            System.out.println("Tipo inválido. Por favor, insira 'Funcionario' ou 'Professor'.");
        }

        scanner.close();
    }
}