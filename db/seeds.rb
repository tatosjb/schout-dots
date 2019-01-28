# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



scouts = ['Altair J. Fernandes', 'Emanuela Boaventura', 'Carlos Bartolomeu da Silva Filho', 'Jardel Correa',
  'Jonas dos Santos']

scouts.each { |name| Scout.new(name: name, section: rand(0..4)).save }

Scout.all.each { |scout| 5.times { scout.score_movements.new(quantity: rand(1..4)).save } }