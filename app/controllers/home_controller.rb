class HomeController < ApplicationController

  def index
  end

  def companies
  	@companies = Company.all
  end
  
end
