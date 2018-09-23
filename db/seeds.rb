# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


breeds = ['Beagle', 'Border Collie', 'Chihuahua', 'French Bulldog', 'Husky', 'Labrador', 'Miniature Schnauzer', 'Pug', 'Samoyed', 'Shiba']
breeds.each{|breed| Breed.create(name: breed, img_url:"/public/img/#{breed}/img.jpg", likes:0)}
