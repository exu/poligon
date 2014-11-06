package uberlib

type Printer struct {
	 Prompter
}

func (this *Printer) Print() string {
    return this.Text
}
