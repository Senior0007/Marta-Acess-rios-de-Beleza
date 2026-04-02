export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isNew?: boolean;
  sales?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Conjunto Colar e Brincos Pérola',
    price: 15000,
    category: 'Colares',
    image: 'https://images.unsplash.com/photo-1599643478514-4a820cbf311e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Conjunto elegante de colar e brincos com pérolas cultivadas, perfeito para ocasiões especiais.',
    isNew: true,
    sales: 120
  },
  {
    id: '2',
    name: 'Brincos Argola Dourada',
    price: 8500,
    category: 'Brincos',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Brincos de argola clássicos com banho de ouro 18k. Leves e versáteis para o dia a dia.',
    sales: 350
  },
  {
    id: '3',
    name: 'Pulseira Prata Fina',
    price: 12000,
    category: 'Pulseiras',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pulseira delicada em prata 925 com elos finos. Um toque de sofisticação discreta.',
    sales: 85
  },
  {
    id: '4',
    name: 'Anel Solitário Zircónia',
    price: 9000,
    category: 'Anéis',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66122228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Anel solitário com pedra de zircónia brilhante. Design intemporal e elegante.',
    sales: 210
  },
  {
    id: '5',
    name: 'Conjunto Noiva Elegance',
    price: 35000,
    category: 'Conjuntos',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Conjunto completo para noivas com colar, brincos e pulseira com cristais cintilantes.',
    isNew: true,
    sales: 45
  },
  {
    id: '6',
    name: 'Brincos Gota Cristal',
    price: 11000,
    category: 'Brincos',
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Brincos em formato de gota com cristal facetado que reflete a luz lindamente.',
    sales: 150
  },
  {
    id: '7',
    name: 'Colar Coração Minimalista',
    price: 14500,
    category: 'Colares',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Colar com pingente de coração minimalista. O presente perfeito para alguém especial.',
    sales: 280
  },
  {
    id: '8',
    name: 'Pulseira Berloques',
    price: 18000,
    category: 'Pulseiras',
    image: 'https://images.unsplash.com/photo-1573408301145-b98c46544405?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pulseira estilo europeu pronta para receber os seus berloques favoritos.',
    isNew: true,
    sales: 95
  },
  {
    id: '9',
    name: 'Blusas Básicas Caneladas',
    price: 2000,
    category: 'Vestuário',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Blusas básicas caneladas com decote, disponíveis em várias cores. Confortáveis e versáteis.',
    isNew: true,
    sales: 500
  },
  {
    id: '10',
    name: 'Brincos Variados',
    price: 1500,
    category: 'Brincos',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Coleção de brincos variados, desde argolas a modelos com pérolas e pedras.',
    sales: 420
  },
  {
    id: '11',
    name: 'Anéis de Garantia',
    price: 1000,
    category: 'Anéis',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66122228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Anéis de garantia em aço inoxidável dourado. Vários tamanhos disponíveis.',
    sales: 600
  },
  {
    id: '12',
    name: 'Miniaturas (Perfumes/Cosméticos)',
    price: 1000,
    category: 'Cosméticos',
    image: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Miniaturas práticas para levar na mala. Várias opções disponíveis.',
    sales: 380
  },
  {
    id: '13',
    name: 'Turbantes / Tiaras',
    price: 1000,
    category: 'Acessórios de Cabelo',
    image: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Turbantes e tiaras coloridas com laço. Perfeitas para dar um toque especial ao seu penteado.',
    isNew: true,
    sales: 250
  }
];

export const categories = ['Todos', 'Colares', 'Brincos', 'Pulseiras', 'Anéis', 'Conjuntos', 'Vestuário', 'Cosméticos', 'Acessórios de Cabelo'];
