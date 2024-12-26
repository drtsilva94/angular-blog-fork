import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // Variáveis para armazenar os dados
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  photoGallery: any[] = []; // Array para a galeria de fotos
  selectedPhoto: any = null; // Foto selecionada para exibir comentário
  private id: string | null = "0"; // ID capturado pela URL

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Captura o ID da URL
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
    });

    // Carrega os dados com base no ID
    this.setValuesToComponent(this.id);
  }

  // Define os valores para cada ID
  setValuesToComponent(id: string | null) {
    if (id === "2") { // Mar
      this.contentTitle = "Água";
      this.contentDescription = "Uma bela vista do mar.";
      this.photoCover = "assets/image/praia.png";
      this.photoGallery = [
        { src: "assets/image/ribeirão.png", alt: "Mar 1", comment: "Vista maravilhosa do mar azul." },
        { src: "assets/image/ribeirão2.png", alt: "Mar 2", comment: "Pôr do sol na praia." },
        { src: "assets/image/naufragados.png", alt: "Mar 3", comment: "Barco no horizonte." },
        { src: "assets/image/agua.png", alt: "Mar 5", comment: "Barco no horizonte." },
        { src: "assets/image/pordosol.png", alt: "Mar 6", comment: "Pôr do sol na praia." },
        { src: "assets/image/janela.png", alt: "Mar 7", comment: "Barco no horizonte." },
        { src: "assets/image/matadeiro.png", alt: "Mar 8", comment: "Barco no horizonte." },
        { src: "assets/image/marazul.png", alt: "Mar 9", comment: "Barco no horizonte." },
        { src: "assets/image/lago.png", alt: "Mar 6", comment: "Pôr do sol na praia." },
        { src: "assets/image/aguaverde.png", alt: "Mar 7", comment: "Barco no horizonte." },
        { src: "assets/image/cachoeira.png", alt: "Mar 8", comment: "Barco no horizonte." },
        { src: "assets/image/cachoeira2.png", alt: "Mar 9", comment: "Barco no horizonte." },
      ];
    } else if (id === "3") { // Animais fofinhos
      this.contentTitle = "Animais fofinhos";
      this.contentDescription = "Fotos de animais adoráveis.";
      this.photoCover = "assets/image/kenai1.png";
      this.photoGallery = [
        { src: "assets/image/kenai1.png", alt: "Animal 1", comment: "Cachorro brincando no parque." },
        { src: "assets/image/kenai2.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/lagartixa.png", alt: "Animal 1", comment: "Cachorro brincando no parque." },
        { src: "assets/image/fofinhos.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/kira.png", alt: "Animal 1", comment: "Cachorro brincando no parque." },
        { src: "assets/image/koda.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/kira2.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/koda1.png", alt: "Animal 1", comment: "Cachorro brincando no parque." },
        { src: "assets/image/kenaikira2.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/kenaikira.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
        { src: "assets/image/kenaiekoda.png", alt: "Animal 1", comment: "Cachorro brincando no parque." },
        { src: "assets/image/kodabb.png", alt: "Animal 2", comment: "Gatinho dormindo na janela." },
      ];
    } else if (id === "4") { // Montanhas
      this.contentTitle = "Montanhas";
      this.contentDescription = "Paisagens incríveis de montanhas.";
      this.photoCover = "assets/image/cordilheira.png";
      this.photoGallery = [
        { src: "assets/image/barraca.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/arvores.png", alt: "Montanha 2", comment: "Trilha em meio às montanhas." },
        { src: "assets/image/cordilheira.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/cordilheira2.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/cordilheira3.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/quadro.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/vulcao.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/outono.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/arvores3.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/arvores2.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/cachoeira2.png", alt: "Montanha 1", comment: "Vista do topo da montanha." },
        { src: "assets/image/folhas.png", alt: "Montanha 1", comment: "Vista do topo da montanha." }
      ];
    }
  }

  // Exibe o comentário ao clicar na foto
  showComment(index: number) {
    this.selectedPhoto = this.photoGallery[index];
  }

  // Fecha o comentário
  closeComment() {
    this.selectedPhoto = null;
  }
}
