# frozen_string_literal: true
if @campaign
  json.campaign do
    json.id @campaign.id
    json.title @campaign.title
    json.slug @campaign.slug
    json.description @campaign.description
  end
end
