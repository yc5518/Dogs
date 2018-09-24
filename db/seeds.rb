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


# breeds = ['Beagle', 'Border Collie', 'Chihuahua', 'French Bulldog', 'Husky', 'Labrador', 'Miniature Schnauzer', 'Pug', 'Samoyed', 'Shiba']
# breeds.each{|breed| Breed.create(name: breed, img_url:"/public/img/#{breed}/img.jpg", likes:0)}

Breed.create(name: 'Beagle', img_url:"https://images.dog.ceo/breeds/beagle/n02088364_14095.jpg", likes:4)
Breed.create(name: 'Border Collie', img_url:"https://images.dog.ceo/breeds/collie-border/n02106166_1056.jpg", likes:5)
Breed.create(name: 'Chihuahua', img_url:"https://images.dog.ceo/breeds/chihuahua/n02085620_4515.jpg", likes:3)
Breed.create(name: 'French Bulldog', img_url:"https://images.dog.ceo/breeds/bulldog-french/n02108915_9399.jpg", likes:30)
Breed.create(name: 'Husky', img_url:"https://images.dog.ceo/breeds/husky/n02110185_2672.jpg", likes:5)
Breed.create(name: 'Labrador', img_url:"https://images.dog.ceo/breeds/labrador/n02099712_6404.jpg", likes:8)
Breed.create(name: 'Miniature Schnauzer', img_url:"https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_60.jpg", likes:83)
Breed.create(name: 'Pug', img_url:"https://images.dog.ceo/breeds/pug/n02110958_13023.jpg", likes:6)
Breed.create(name: 'Samoyed', img_url:"https://images.dog.ceo/breeds/samoyed/n02111889_13737.jpg", likes:44)
Breed.create(name: 'Shiba', img_url:"https://images.dog.ceo/breeds/shiba/shiba-3i.jpg", likes:60)

visitors = ['Visitor01','Visitor02', 'Visitor03', 'Visitor04', 'Visitor05']
visitors.each{|visitor| Comment.create(breed_id:1, content:"Beagle is friend of our human.", creator:visitor, reply_to:"#{visitor}1")}

Comment.create(breed_id:2, content:"Border Collie is our friend.", creator:"visitor1")
Comment.create(breed_id:2, content:"Border Collie is friend of our human.", creator:"visitor2", reply_to:"visitor1")
Comment.create(breed_id:3, content:"Chihuahua Collie is friend of our human.", creator:"visitor4")
Comment.create(breed_id:3, content:"Border Collie is friend of our human.", creator:"visitor5", reply_to:"visitor4")