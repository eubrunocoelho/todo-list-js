class Task {
    constructor(id, task, status) {
        this.id = id
        this.task = task
        this.status = status
    }

    getId() {
        return this.id
    }

    getTask() {
        if (this.task !== '') return this.task
    }

    getStatus() {
        switch (this.status) {
            case 0:
                this.status = 'Em progresso'
                break
            case 1:
                this.status = 'Conclúido'
                break
        }

        return this.status;
    }
}

export { Task }