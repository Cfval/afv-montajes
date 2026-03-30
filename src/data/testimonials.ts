export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Desde el primer momento supimos que habíamos elegido bien. Alberto vino a medir, propuso ideas que no habíamos contemplado y el resultado final superó todas nuestras expectativas. La cocina es sencillamente perfecta.',
    name: 'María García',
    location: 'Elche, Alicante',
  },
  {
    id: '2',
    quote: 'Llevábamos años pensando en reformar la cocina y siempre lo aplazábamos. Finalmente nos decidimos y no podemos estar más contentos. Trabajo impecable, puntual y con un nivel de detalle que no esperábamos a ese precio.',
    name: 'Carlos Martínez',
    location: 'Torrevieja, Alicante',
  },
]
