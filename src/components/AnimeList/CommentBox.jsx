import prisma from "@/libs/prisma"

const CommentBox = async({mal_id}) => {
    const comments = await prisma.comment.findMany({where: {mal_id}})
    
    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="text-color-brown bg-color-grey p-4">
                        <p>{comment.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox