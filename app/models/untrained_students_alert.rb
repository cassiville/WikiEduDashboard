# Alert for a course that has no enrolled students after it is underway
class UntrainedStudentsAlert < Alert
  def main_subject
    course.slug
  end

  def url
    course_url
  end
end
