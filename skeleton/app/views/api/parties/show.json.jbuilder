json.name @party.name
  json.guests do
    json.array! @party.guests.each do |guest|
    json.name guest.name
    json.gifts do
      json.array! guest.gifts.each do |gift|
        json.title gift.title
      end
    end
  end
end
