# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# img_url:"/public/img/#{breed}/img.jpg"
#
# https://images.dog.ceo/breeds/chihuahua/n02085620_4515.jpg


breeds = ['Beagle', 'Border Collie', 'Chihuahua', 'French Bulldog', 'Husky', 'Labrador', 'Miniature Schnauzer', 'Pug', 'Samoyed', 'Shiba']
breeds.each{|breed| Breed.create(name: breed, img_url:"https://images.dog.ceo/breeds/chihuahua/n02085620_4515.jpg", likes:0)}

visitors = ['Visitor01','Visitor02', 'Visitor03', 'Visitor04', 'Visitor05'];
visitors.each{|visitor| Comment.create(breed_id:1, content:"Beagle is friend of our human.", creator:visitor, reply_to:"#{visitor}1")}