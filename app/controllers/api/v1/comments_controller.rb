class Api::V1::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  #todo: need to fix sql bug in selecting comments to an id-specific breed
  def show
    render json: Comment.find_by_sql("select * from Comments where breed_id = #{(:breed_id)}")
  end

  def create
    comment = Comment.create(comment_params)
    render json: comment
  end

  def update
    comment = Comment.find(params[:id])
    comment.update_attributes(comment_params)
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :breed_id, :content, :creator, :reply_to)
  end
end