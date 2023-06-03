-- CreateEnum
CREATE TYPE "form_field_type" AS ENUM ('Text_PlainText', 'Text_Textarea', 'Text_Protected', 'Text_Email', 'Text_PhoneNumber', 'Text_CardNumber', 'Date_DatePicker', 'Date_Timeslot', 'FileUpload_Image', 'FileUpload_PDF', 'Checkbox', 'Radio', 'Select', 'MultiSelect');

-- CreateTable
CREATE TABLE "forms" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_fields" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "type" "form_field_type" NOT NULL,
    "is_required" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_field_options" (
    "id" SERIAL NOT NULL,
    "form_field_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "form_field_options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submissions" (
    "id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,

    CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submission_fields" (
    "id" SERIAL NOT NULL,
    "submission_id" INTEGER NOT NULL,
    "input_value" TEXT NOT NULL,

    CONSTRAINT "form_submission_fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_submission_field_options" (
    "id" SERIAL NOT NULL,
    "submission_field_id" INTEGER NOT NULL,
    "form_field_option_id" INTEGER NOT NULL,

    CONSTRAINT "form_submission_field_options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "form_fields" ADD CONSTRAINT "form_fields_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_field_options" ADD CONSTRAINT "form_field_options_form_field_id_fkey" FOREIGN KEY ("form_field_id") REFERENCES "form_fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_submission_fields" ADD CONSTRAINT "form_submission_fields_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "form_submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_submission_field_options" ADD CONSTRAINT "form_submission_field_options_submission_field_id_fkey" FOREIGN KEY ("submission_field_id") REFERENCES "form_submission_fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_submission_field_options" ADD CONSTRAINT "form_submission_field_options_form_field_option_id_fkey" FOREIGN KEY ("form_field_option_id") REFERENCES "form_field_options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
