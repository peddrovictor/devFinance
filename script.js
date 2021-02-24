const Modal = {
    open() {
        //Abril modal
        //Adicionar classe active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        //Fechar modal
        //Remover classe active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }]

const Transaction = {
    incomes() {
        //somar entradas
    },
    expenses() {
        //soma saídas
    },
    total() {
        //entradas - saídas
    }
}

// Transações do objeto "transactions" e adicionar ao html  
// Substitução de dados html == js


const DOM = {
    innerHTMLTransaction() {

        const html = `
                    <tr>
                        <td class="description">Luz</td>
                        <td class="expense">-R$ 500,00</td>
                        <td class="date">23/01/2021</td>
                        <td>
                            <img src="./assets/minus.svg" alt="Remover transação">
                        </td>
                    </tr>
                    `
        

    }
}