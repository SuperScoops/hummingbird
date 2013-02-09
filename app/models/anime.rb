class Anime < ActiveRecord::Base
  include PgSearch
  pg_search_scope :search_by_title, :against => [:title, :alt_title], :using => [:tsearch, :trigram]

  extend FriendlyId
  friendly_id :title, :use => [:slugged]

  attr_accessible :title, :age_rating, :episode_count, :episode_length, :mal_id, :status, :synopsis, :cover_image

  has_attached_file :cover_image, :styles => { :thumb => "450x670!" }

  has_many :quotes
  has_many :castings
  has_many :reviews
  has_many :recommendations
  has_and_belongs_to_many :genres
  has_and_belongs_to_many :producers

  validates :title, :slug, :presence => true, :uniqueness => true
end
